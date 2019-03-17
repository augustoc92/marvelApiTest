import React, { Component } from 'react'
import Card from './ComicCard'
import Button from '@material-ui/core/Button';
import styles from './ComicList.module.css';
import Input from '@material-ui/core/Input';

class ComicList extends Component {
  componentDidMount() {
    const { getComics } = this.props
    getComics()
  }

  handleChange = (e) => {
    const { setFilter } = this.props
    setFilter(e.target.value)
  }

  handleClick = () => {
    const { setSorter, sorter } = this.props
    if (sorter === 'ascend') {
      return setSorter('descend')
    }
    return setSorter('ascend')
  }

  render() {
    const { comics } = this.props
    return (
      <div className={styles.ComicCard}>
      <Input 
        type="string"
        autoFocus
        onChange={this.handleChange}
      />
      <Button variant="contained" onClick={this.handleClick}>
        Sort
      </Button>
          {comics.map(item => (
          <Card 
          comicName={item.title}
          comicDate={item.dates}
          issueNumber={item.issueNumber}
          variantDescription={item.variantDescription}
          urls={item.urls}
          />
        ))}
      </div>
    )
  }
}

export default ComicList