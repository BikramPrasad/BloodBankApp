import React, { PureComponent } from "react";
import { db } from "../../config/fbConfig";

class SearchResults extends PureComponent {
  state = {
    response: [],
  };
  componentDidMount() {
    db.collection("donors")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const dat = doc.data();
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
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="gg">
        {this.state.response.length === 0 && (
          <h2 className="center red-text">No Results Found!</h2>
        )}
        {this.state.response.map((data) => (
          <div key={data.contact}>
            <ul className="collection">
              <li class="collection-item avatar">
                <img src="" alt="" class="circle" />
                <span class="title">{data.firstName}</span>
                <h2>{data.lastName}</h2>
                <h3>{data.contact}</h3>
                <h3>{data.bloodgroup}</h3>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
