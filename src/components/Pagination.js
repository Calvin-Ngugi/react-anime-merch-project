import React from 'react'

const Pagination = ({merchPerPage, totalMerch, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalMerch / merchPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <div className='container-sm w-25'>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className="page-item my-4 mx-1">
                    <a onClick={() => paginate(number)} href='!#' className='page-link text-dark text-center'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination