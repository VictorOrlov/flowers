Используется сборка [ReactQL](https://reactql.org) - Универсальный стартовый набор React + GraphQL, написанный на Typescript.

## Особенности

### Front-end стек (Используемый на проекте)

- [React v16.8](https://reactjs.org) (тот, что с [hooks](https://reactjs.org/docs/hooks-intro.html)!) Для пользовательского интерфейса.
- [Apollo Client 2.5 (React)](http://dev.apollodata.com/react/) для подключения к GraphQL.
- [Sass](https://sass-lang.com/), [Less](http://lesscss.org/) and [PostCSS](https://postcss.org/) при импорте .css/.scss/.lessфайлов.
- [React Router 4](https://reacttraining.com/react-router/) для декларативных маршрутов браузера + сервера.
- [GraphQL Code Generator v1.1](https://graphql-code-generator.com/) для анализа схем удаленного сервера GraphQL, для автоматического создания полностью типизированных HOC Apollo React вместо написания Query/Mutation запросов вручную.
- для динамического изменения head используется [react-helmet](https://github.com/nfl/react-helmet).
- [react-id-swiper](https://www.npmjs.com/package/react-id-swiper) для слайдера фотографий.
- [react-dropzone](https://react-dropzone.js.org/) для перетаскивания файлов с дальнейшей отправкой на бэк.
- [react-yandex-share](https://www.npmjs.com/package/react-yandex-share), что бы пользователь мог поделится в соц сетях.
- [react-dadata](https://www.npmjs.com/package/react-dadata): React компонент для подсказок адресов с помощью сервиса DaData.ru

### Основные консольные команды в режиме разработки

- `yarn start` - для запуска приложения. P.S- первоначально нужно самому зайти на loclhost:3000. Далее при, сохранении кода, обновлятся будет в реальном времени.
- `yarn lint:save` - проверяет синтаксис,корректность и сохраняет исправленный результат. При сохранении коммита запускается автоматически, из за чего остается не закоментированные изменения. Лучше запускать в ручную перед командой `git add`.
- `yarn gen:graphql` - генерирует полностью типизированные хуки, на основе написанной схемы и запросов. <!--[подробнее](#gen) -->

## Макет проекта

"Что это и как" в [src](src).
> Обращение к рисункам в src/images возможно через ссылку(images/name.jpg) только на dev благодаря copy-webpack-plugin, чтобы работало на продакшене необходимо закинуть их на сервер или явно импортировать(import Image from ‘@/images/name.jpg’)
### Краткое содержание папки src:
1. [components](#1-components)
2. containers
3. entry
4. fakeData
5. global
6. images 
7. queries

## 1. components:

[src/components](src/components) содержит "глупые" компоненты. Есть исключение в header - передается hook для передачи с сервера числа участников и голосующих.
* ### AppComponentsForParticipation 
  шаблоны заголовка и карточки для SectionForParticipant(компонент со статусом заявки пользователя на участие). Меняет стили компонента в зависимости от
от (state) заявки.
   ```
    function style() {
      switch (request.state) {
        case "approved":
          return "approval_header_succes";
        case "created":
        case "updated":
          return "approval_header_check";
        case "declined":
        case "deleted":
        case "deleted_for_new_request":
          return "approval_header_danger";
      }
    }
   ```
* ### [Button](src/components/Button)
  различные вариации кнопок:
  1. *ButtonLink* - для перехода на сторонние ресурсы или внутренние
  2. *Button* - только обработчик событий
  > Оба выше написанных компонента используют условный оператор.  **Пример:** `<Button green />`- зеленая кнопка, `<Button red large/>`- красная, большая.
  3. *ArrowButtonGroup* - группа из 2х стрелочных кнопок. для перехода на следующую фотографию.
* ### [FilterForm](src/components/FilterForm)
  Форма для фильтрации заявок.
  свойство compititions принимет массив с именами номинаций, для радио баттона.
* ### [MapWithRequests](src/components/MapWithRequests)
  Карта с множественными маркерами.
* ### [Modal](src/components/Modal)
  Шапка и компонент-обёртка модального окна 
* ### [Pagination](src/components/Pagination)
  Пагинация сайта. Свойства компонента - `total`: общее количество страниц, `perPage`: количество объектов на странице, `onPageChange`: onChange, `current`: текущая страница, `pageRange`: количество отображаемых страниц по бокам от текущей.
* ### [RequestCard](src/components/RequestCard)
  Карточка заявки участника.
* ### [RequestModal](src/components/RequestModal)
  Содержит 3 компонента:
    1. *Map*- карта с маркером местоположения данного участника.
    2. *RequestDescription*- информация о участнике
    3. *index*- Модалка появляющиеся при нажатии на карточку заявки участника.

* ### [SectionRules](src/components/SectionRules)
  Содержит 2 компонента:  
    1. *RuleText*- секции со статичным текстом "Правила конкурса". 
    2. *index*- свойство compititions принимет массив с именами номинаций , для вывода их в список.

* ### [WinnerModal](src/components/WinnerModal)
  Модальное окно, появляющиеся при нажатии на прошлогодних победителей. В отличии от RequestModal, показывает только фотографии.

* ### [root.tsx](src/components/root.tsx)
  Главный родительский компонент. Следуй потоку импорта, что бы выяснить цепочку рендеринга компонента и маршрутизацию. Вызывается в [src/entry](src/entry) для изоморфного рендеринга цепочки React в точках входа клиента и сервера.

## 2. [src/containers](src/containers):
Компоненты, которые точно будут использоваться только в одном другом компоненте можно засунуть в папку этого компонента
* ### [HomePage](src/containers/HomePage)
  Главная страница.
  Содержит 6 компонентов:
  1. *[index](src/containers/HomePage/index)* - импортирует в себя [StartPageComponent](src/containers/HomePage/StartPageComponent), [FilterForm](src/components/FilterForm), [SectionRules](src/components/SectionRules), [SectionForParticipant](src/containers/HomePage/SectionForParticipant). Так же импортирует `useCompetitionsQuery()` "все номинации", для дальнейшего проброса в [SectionRules](src/components/SectionRules) и [FilterForm](src/components/FilterForm).
  2. *[JsonschemaForm](src/containers/HomePage/JsonschemaForm)* - Форма отправки на участие в конкурсе.
  3. *[Request](src/containers/HomePage/Request)* - Отображает список участников на странице. Импортирует [RequestCard](src/components/RequestCard).
  4. *[SectionForParticipant](src/containers/HomePage/SectionForParticipant)* - Компонент со статусом заявки на участие. Пока не создана заявка, показывает только форму отправки. Если юзер не залогинен, кнопка перехода на авторизацию.
  Импортирует [JsonschemaForm](src/containers/HomePage/JsonschemaForm) и ApprovalRequestCard, ApprovalRequestTitle, TakePartNotAuth из [AppComponentsForParticipation](src/components/AppComponentsForParticipation).
  5. *[StartPageComponent](src/containers/HomePage/StartPageComponent)* - При ответе с сервера, возвращает всех участников, пагинацию между страницами карту с маркерами всех участников, при нажатии на соответствующую кнопку. Импортирует [Request](src/containers/HomePage/Request), [WinnerModal](src/components/WinnerModal), [WinnersPreviousYear](src/containers/HomePage/WinnersPreviousYear), [Pagination](src/components/Pagination), [MapWithRequests](src/components/MapWithRequests).
  6. *[WinnersPreviousYear](src/containers/HomePage/WinnersPreviousYear)* - Слайдер с прошлогодними победителями. Импортирует [RequestCard](src/components/RequestCard).
* ### [FlowerFestPage](src/containers/FlowerFestPage)
  Страница цветочного фестиваля.
  Содержит 2 компонента:
  1. *[index](src/containers/FlowerFestPage/index)*- выводит список цветочных фестивалей в виде карточек. Импортирован [WinnerModal](src/components/WinnerModal), т.к в модалке кроме фото ничего не надо.
  2. *[FlowerFestDescription](src/containers/FlowerFestPage/FlowerFestDescription)* - статичный текст для страницы.
* ### [RequestPage/index](src/containers/RequestPage/index)
  При нажатии на участника, когда появляется модальное окно, фактически отображается новая страница. В конце адреса пути устанавливается id участника.
  ```
        <Route
          path="/:id"
          exact
          render={props => <RequestPage {...props} currentUser={fakeUser} />}
        />
  ```

## 3. [src/entry](src/entry)
Точки входа клиента и сервера, которые вызывают src / components / root.tsx для изоморфного рендеринга цепочки React в обеих средах.

## 4. [src/fakeData](src/fakeData)
Фиктивные данные, для частей к которым еще не реализован бэк.

## 5. [src/global](src/global)
Все стили проекта. Есть возможность использования bootstrap`овского grid system.

## 6. [src/images](src/images) 
Картинки лого, 
