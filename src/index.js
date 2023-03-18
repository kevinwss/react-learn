import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



class App extends React.Component {

  state = {
    comments: [
      { id: 1, name: "jack", content: "xxx" }
    ],
    userName: '',
    userContent: ''
  }

  handleForm = (e) => {
    const { name, value } = e.target // 获取表单元素的name和value
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  addComment = () => {
    const { comments, userName, userContent } = this.state
    if (userName.trim() === '' || userContent.trim() === '') {
      alert('请输入评论人和评论内容')
      return
    }
    // console.log(userName, userContent)

    const newComments = [{
      id: comments.length + 1,
      name: userName,
      content: userContent,
    }, ...comments]

    this.setState({
      comments: newComments,
      userName: '',
      userContent: ''
    })
  }

  render() {
    const { userName, userContent } = this.state
    return (
      <div>
        <div>
          <input type="text" placeholder="请输入评论人" value={userName} name="userName"
            onChange={this.handleForm} />
          <br />

          <textarea
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={userContent}
            name="userContent"
            onChange={this.handleForm}
          >
          </textarea>

          <br />
          <button onClick={this.addComment}>发表评论</button>
        </div>

        <h1>评论列表</h1>
        <ul>
          {this.state.comments.map((item, index) => {
            return <li key={item.id}>{item.name}说：{item.content}</li>
          })}
        </ul>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
