import { Component } from "react";

interface ICookieProps {

}

export class Cookie extends Component<ICookieProps, any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
        <button className="Square-button"
        ><img className="Full-size" src = "http://img1.wikia.nocookie.net/__cb20130827014912/cookieclicker/images/thumb/5/5a/PerfectCookie.png/500px-PerfectCookie.png"></img>
        </button>
    );
  }
}