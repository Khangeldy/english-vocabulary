import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './ListView.css'

class ListView extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    rowHeight: PropTypes.number.isRequired,
    component: PropTypes.func.isRequired
  }

  state = {
    scrollTop: 0,
    availableHeight: 0
  }

  componentDidMount() {
    this.setState({availableHeight: this.node.clientHeight})
  }

  onScroll = (e) => {
    this.setState({
      scrollTop: e.target.scrollTop
    })
  }
  
  render() {
    const { scrollTop, availableHeight } = this.state,
          { rowHeight, items, component: Component, onSelect, onDelete } = this.props,
          totalHeight = items.length * rowHeight,
          scrollBottom = scrollTop + availableHeight;

    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 1),
          endIndex = Math.min(items.length, Math.ceil(scrollBottom / rowHeight) + 1);

    const visibleItems = [];

    let index = startIndex
    while(index < endIndex) {
      visibleItems.push(<li
        className={styles.li}
        key={index}
        >
          {<Component data={items[index]} selectWord={onSelect} deleteWord={onDelete} />}
      </li>)
      index++;
    }
    return <div
        className={styles.container}
        onScroll={this.onScroll}
        ref={(node) => this.node = node}
      >
        <ul
          style={{
            paddingTop: startIndex * rowHeight,
            height: totalHeight
          }}
          >
          {visibleItems}
        </ul>
    </div>
  }
}

export default ListView
