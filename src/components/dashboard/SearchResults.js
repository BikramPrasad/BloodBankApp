import React, { PureComponent } from "react";
import { db } from "../../config/fbConfig";

class SearchResults extends PureComponent {
  state = {
    response: [],
  };
  async componentDidMount() {
    db.collection("donor")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const dat = doc.data();
          //
          let params = new URL(document.URL).searchParams;
          if (
            dat.city.trim() === params.get("city").trim() &&
            dat.bloodgroup.trim() === params.get("blood")
          )
            this.setState({
              response: [...this.state.response, dat],
            });
        });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <div className="gg">
        {this.state.response.length === 0 && (
          <h2 className="center red-text">No Results Found!</h2>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {this.state.response.map((data) => (
            <div
              style={{
                width: "30%",
              }}
              key={data.contact}
            >
              <ul className="collection">
                <li class="collection-item avatar">
                  <img src="" alt="" class="circle" />
                  <span class="title">
                    {data.firstName}
                    {data.lastName}
                  </span>
                  <h2>{data.city}</h2>
                  <h3>{data.contact}</h3>
                  <h3>{data.bloodgroup}</h3>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchResults;
