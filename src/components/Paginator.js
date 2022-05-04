import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => {
            if(item !== null) {
                return <article id={"result-" + i} key={i}>
                    <h3>
                        {"Тест по " + item.name}
                        {/* <span className={"close " + i} title="delete" onClick={deleteTestResult}></span> */}
                    </h3>
                    <h4>{"Дата : " + new Date(item.date).toLocaleDateString("en-US") + ", " + item.startTime + " часа"}</h4>
                    <h4>{"Времетраене : " + Math.floor(item.time/1000/60) + " мин"}</h4>
                    <h4>{"Верни отговори : " + item.rightAnswers + " / 20"}</h4>
                    <h4>{"Точки : " + item.points + " / 100"}</h4>
                </article>
            }
        })}
    </>
  );
}

function Paginator({ items, itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="paginator">
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Paginator;