import React from 'react';
import ButtonComp from './button-Comp';
import '../styles/style.css';
export default class LikeDislike extends React.Component {
  constructor() {
    super();
    this.state = {
      islikesCliked: false,
      isdislikeCliked: false,
      titleLike: 'Like',
      titleDislike: 'Dislike',
      likesCount: 100,
      dislikeCount: 26
    }
  }

  onLike = (title) => {
    this.setState({
      titleLike: title,
      islikesCliked: !this.state.islikesCliked
    });
    if (this.state.isdislikeCliked) {
      this.setState({
        likesCount: (this.state.islikesCliked)
          ? this.state.likesCount - 1
          : this.state.likesCount + 1,
        dislikeCount: (this.state.islikesCliked)
          ? this.state.dislikeCount
          : this.state.dislikeCount - 1,
        isdislikeCliked: !this.state.isdislikeCliked
      });
    } else {
      this.setState({
        likesCount: (this.state.islikesCliked)
          ? this.state.likesCount - 1
          : this.state.likesCount + 1
      });
    }
  }
  onDislike = (title) => {
    this.setState({
      titleDislike: title,
      isdislikeCliked: !this.state.isdislikeCliked
    });
    if (this.state.islikesCliked) {
      this.setState({
        likesCount: (this.state.isdislikeCliked)
          ? this.state.likesCount
          : this.state.likesCount - 1,
        dislikeCount: (this.state.isdislikeCliked)
          ? this.state.dislikeCount - 1
          : this.state.dislikeCount + 1,
        islikesCliked: !this.state.islikesCliked
      });
    } else {
      this.setState({
        dislikeCount: (this.state.isdislikeCliked)
          ? this.state.dislikeCount - 1
          : this.state.dislikeCount + 1
      });
    }
  }
  render() {
    const {
      islikesCliked,
      likesCount,
      titleLike,
      dislikeCount,
      isdislikeCliked,
      titleDislike
    } = this.state;
    return (<div>
      <ButtonComp class={`${islikesCliked
          ? 'likes-count'
          : ''}`} onclick={this.onLike.bind(this, 'Like')} count={likesCount} title={titleLike || 'Like'}/>
      <ButtonComp class={`${islikesCliked
          ? 'likes-count'
          : ''}`} onclick={this.onDislike.bind(this, 'Dislike')} count={dislikeCount} title={titleDislike || 'Dislike'}/>

    </div>);
  }
}
