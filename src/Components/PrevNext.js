import "./PrevNext.css"

const PrevNext = ({ goNextPage, goPrevPage, loading, setLoading }) => {
  
  return (

    <div className="prev-next">
      {goPrevPage && <button className="button" onClick={goPrevPage}>← &nbsp; Previous</button>}
      {goNextPage && <button className="button" onClick={goNextPage}>Next &nbsp; →</button>}
    </div>
  );
};

export default PrevNext;
