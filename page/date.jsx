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
      <div id="root">
        {this.state.author}
        {this.state.branch}
        {this.state.date}
        {this.state.sha}
        {this.state.link}
      </div>
    );
  }
}

ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));
