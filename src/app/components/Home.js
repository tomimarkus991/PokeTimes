import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../images/pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div
            className="overflow-hidden relative text-center mr-auto ml-auto max-w-md rounded shadow-lg px-16 py-8"
            key={post.id}>
            <img
              className="absolute opacity-75 mt-1 -ml-40"
              src={Pokeball}
              alt="Pokeball image"
            />
            <div>
              <Link to={'/' + post.id}>
                <span className="font-bold text-xl mb-4 ml-8">{post.title}</span>
              </Link>
              <p className="text-gray-700 text-base ml-8">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
        <div>No posts yet</div>
      );
    return (
      <div className="text-center">
        <h1>Home</h1>
        {postList}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
