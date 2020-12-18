class LatestCommitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      branch: "",
      date: "",
      sha: "",
      link: ""
    };
  }

  componentDidMount() {
    // Replace this with your own repo
    // https://api.github.com/repos/:owner/:repo/branches/master
    fetch(
      "https://api.github.com/repos/hokanet/MAPI_GDS/branches/gh-pages"
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.setState({
            author: json.commit.author.login,
            branch: json.name,
            date: json.commit.commit.author.date,
            sha: json.commit.sha,
            link: json._links.html
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.author}</div>
        <div>{this.state.branch}</div>
        <div>{this.state.date}</div>
        <div>{this.state.sha}</div>
        <div>{this.state.link}</div>
      </div>
    );
  }
}

ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));