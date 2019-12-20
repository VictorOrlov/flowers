import * as React from "react";

interface IProps {
  current: number;
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
  pageRange: number;
}

const Pagination: React.SFC<IProps> = (props: IProps) => {
  const pages = () => {
    var pages = [];
    for (var i = rangeStart(); i <= rangeEnd(); i++) {
      pages.push(i);
    }
    return pages;
  };

  const rangeStart = () => {
    var start = props.current - props.pageRange;
    return start > 0 ? start : 1;
  };

  const rangeEnd = () => {
    var end = props.current + props.pageRange;
    return end < props.total ? end : props.total;
  };

  const nextPage = () => {
    return props.current + 1;
  };

  const prevPage = () => {
    return props.current - 1;
  };

  const hasFirst = () => {
    return rangeStart() !== 1;
  };

  const hasLast = () => {
    return rangeEnd() < props.total;
  };

  const hasPrev = () => {
    return props.current > 1;
  };

  const hasNext = () => {
    return props.current < props.total;
  };

  const changePage = (page: any) => {
    props.onPageChange(page);
  };

  return (
    <div className="pagination">
      <div className="pagination__left">
        <span
          className={!hasPrev() ? "hidden_page_numbers" : ""}
          onClick={e => changePage(prevPage())}
        >
          Предыдущая
        </span>
      </div>

      <div className="pagination__mid">
        <ul>
          <li className={!hasFirst() ? "hidden_page_numbers" : ""}>
            <span onClick={e => changePage(1)}>1</span>
          </li>
          <li className={!hasFirst() ? "hidden_page_numbers" : ""}>...</li>
          {pages().map((page, index) => {
            return (
              <li key={index}>
                <span
                  onClick={e => changePage(page)}
                  className={props.current == page ? "current" : ""}
                >
                  {page}
                </span>
              </li>
            );
          })}
          <li className={!hasLast() ? "hidden_page_numbers" : ""}>...</li>
          <li className={!hasLast() ? "hidden_page_numbers" : ""}>
            <span onClick={e => changePage(props.total)}>{props.total}</span>
          </li>
        </ul>
      </div>

      <div className="pagination__right">
        <span
          className={!hasNext() ? "hidden_page_numbers" : ""}
          onClick={e => changePage(nextPage())}
        >
          Следующая
        </span>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  pageRange: 2
};

export default Pagination;
