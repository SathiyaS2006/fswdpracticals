import { useState } from "react";

function BookTracker() {

  const [books, setBooks] = useState([
    { name: "Java Programming", available: false },
    { name: "Python Basics", available: false },
    { name: "Web Development", available: false }
  ]);

  const toggleAvailability = (index) => {

    const updatedBooks = [...books];

    updatedBooks[index].available = !updatedBooks[index].available;

    setBooks(updatedBooks);

  };

  const availableCount = books.filter(b => b.available).length;

  const unavailableCount = books.length - availableCount;

  return (

    <div style={styles.app}>

      <div style={styles.card}>

        <h1>📚 Library Book Tracker</h1>

        <div style={styles.stats}>
          <div style={styles.available}>
            Available: {availableCount}
          </div>

          <div style={styles.unavailable}>
            Not Available: {unavailableCount}
          </div>
        </div>

        <ul style={styles.list}>

          {books.map((book, index) => (

            <li key={index} style={styles.item}>

              <span>{book.name}</span>

              <button
                style={
                  book.available
                    ? styles.btnAvailable
                    : styles.btnUnavailable
                }

                onClick={() => toggleAvailability(index)}
              >

                {book.available ? "Available" : "Unavailable"}

              </button>

            </li>

          ))}

        </ul>

      </div>

    </div>

  );

}

const styles = {

  app:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#eef2f7",
    fontFamily:"Arial"
  },

  card:{
    width:"400px",
    padding:"30px",
    background:"white",
    borderRadius:"12px",
    boxShadow:"0 4px 15px rgba(0,0,0,0.2)"
  },

  stats:{
    display:"flex",
    justifyContent:"space-between",
    marginBottom:"20px"
  },

  available:{
    color:"green",
    fontWeight:"bold"
  },

  unavailable:{
    color:"red",
    fontWeight:"bold"
  },

  list:{
    listStyle:"none",
    padding:"0"
  },

  item:{
    display:"flex",
    justifyContent:"space-between",
    marginBottom:"10px",
    padding:"10px",
    background:"#f4f6f8",
    borderRadius:"6px"
  },

  btnAvailable:{
    background:"green",
    color:"white",
    border:"none",
    padding:"6px 10px",
    borderRadius:"6px",
    cursor:"pointer"
  },

  btnUnavailable:{
    background:"red",
    color:"white",
    border:"none",
    padding:"6px 10px",
    borderRadius:"6px",
    cursor:"pointer"
  }

};

export default BookTracker;