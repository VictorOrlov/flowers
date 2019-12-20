import React from 'react';
import { mount } from 'enzyme';
import ApprovalRequestTitle from '../ApprovalRequestTitle';
import { UserApproved, UserDeclined, UserCreated, UserDeleted, UserDeletedForNewRequest, UserUpdated } from '../../../fakeDada/fakeUsers';


const componentResult = (state: any) =>  mount(
  <ApprovalRequestTitle state={state.participant.request.state}/>
)

describe('display title text correctly', ()=> {
  it('approved', ()=>{
    const component = componentResult(UserApproved);
    expect(component.text())
    .toBe('Ваша заявка принята!Ваша заявка учавствует в народном голосовании, вы можете посмотреть ее здесь.');
  });

  it('declined', ()=>{
    const component = componentResult(UserDeclined);
    expect(component.text())
    .toBe('Ваша заявка отклонена!Заявка отклонена.');
  });

  it('created', ()=>{
    const component = componentResult(UserCreated);
    expect(component.text())
    .toBe('Ваша заявка отправлена!После того, как ваша заявка пройдет модерацию, Вы сможете её отредактировать.');
  });

  it('deleted & deleted_for_new_request', ()=>{
    const component = componentResult(UserDeleted);
    expect(component.find('.section_for_participant_title').at(0).text())
      .toBe('Ваша заявка заблокирована!');
    const component2 = componentResult(UserDeletedForNewRequest)
    expect(component2.find('.section_for_participant_title').at(1).text())
      .toBe('Заявка заблокирована. Причина: Нет цветов на фотографии.Мы с пониманием относимся к подобного рода недоразумениям. Попробуйте еще раз.');
  });

  it('updated', ()=>{
    const component = componentResult(UserUpdated);
    expect(component.find('.section_for_participant_title').at(0).text())
      .toBe('Ваша заявка обновлена!');
  });
});