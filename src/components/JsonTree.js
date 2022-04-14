import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class JsonTree extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nodes: this.jsonToArray(this.props.dataJson)
    }
  }

  componentDidMount() {
    const toggler = document.getElementsByClassName("caret");

    for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

  arrayObj(title, value, children = []) {
    return {
      title, value, children
    }
  }

  jsonToArray(obj) {
    const arr = []

    for(let item in obj) {
      if (typeof obj[item] === 'string') {
        arr.push(this.arrayObj(item, obj[item]));
      } else {
        arr.push(this.arrayObj(item, "", this.jsonToArray(obj[item])));
      }
    }

    return arr;
  }

  render() {
    const nodes = nodesArray => {
      return nodesArray.map((node, i) => {
        if(node.children.length > 0) {
          return <li key={i}><span className="caret">{node.title}</span><ul className="nested">{nodes(node.children)}</ul></li>
        }

        if(this.props.hasParent) {
          return <li key={i}><Link to={node.value}>{node.title}</Link></li>
        }

        return <li key={i}><Link to={node.value}>{node.title}</Link></li>
      })
    }

    return (
      <ul id="ul-tree">{nodes(this.state.nodes)}</ul>
    );
  }
}

export default JsonTree;

JsonTree.propTypes = {
  dataJson: PropTypes.object,
  hasParent: PropTypes.bool
}