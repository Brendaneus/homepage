import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BIO_CONTENT } from './global-constants.jsx'

// Header

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>I'm Brendan and I build things.</h1>
      </header>
    )
  }
}

// Main

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tabStates: {
        bio: true,
        projectList: false,
      }
    }
  }

  render () {
    return (
      <main>
        <Tab tabId="bio" name="Bio" active={this.state.tabStates.bio} onTabClick={this.onTabClick.bind(this)}>
          <Bio/>
        </Tab>
        <Tab tabId="projectList" name="Project List" active={this.state.tabStates.projectList} onTabClick={this.onTabClick.bind(this)}>
          <ProjectList/>
        </Tab>
      </main>
    )
  }

  onTabClick(clickedName) {
    const newTabStates = {}
    for (const tabName in this.state.tabStates) {
      newTabStates[tabName] = (tabName === clickedName) ? true : false
    }
    console.log(newTabStates)
    this.setState({tabStates: newTabStates})
  }
}

class Tab extends React.Component {
  activeClass() {
    return this.props.active ? "active" : "inactive"
  }

  render () {
    return (
      <section className={this.activeClass() + " tab"}>
        <button onClick={this.handleTabClick.bind(this)}>
          <h2>{this.props.name}</h2>
        </button>
        <div className="tab-content">{this.props.children}</div>
      </section>
    )
  }

  handleTabClick() {
    if (!this.props.active) {
      this.props.onTabClick(this.props.tabId)
    }
  }
}

class Bio extends React.Component {
  render () {
    return (
      <div className="bio">
        <p>
          Welcome to my personal homepage! I'm a programmer for hire, and a maker for life.
        </p>

        <hr/>

        <p>
          Mostly, you will see web development projects here.
          I like to think I'm pretty proficient in using Ruby on Rails to make web apps
          and could probably put together any idea you come up with (given the time and gems).
        </p>

        <p>
          On top of Rails, I'm working Vue into my stack and applying React to single page front ends.
          I have experience working with Amazon Web Services, especially their S3 storage service,
          but plan to branch out to Google Cloud and other platforms too.
          For deployment I mainly rely on Heroku (PaaS), because of the simplicity and ease of use,
          but I plan on at least learning how to use IaaS, on my way to bare metal servers.
          I'm already familiar with the fundamentals of networking (even though I never got my CCENT,
          which I plan to go back for), and would like to learn a true full stack from user to transistor.
          I started out programming using plain HTML and CSS to throw some ideas up online,
          but now I've learned so much this might as well be my profession.
        </p>

        <p>
          Besides web development, I'm revisiting higher maths and physics in an effort to transition into the real world.
          This means working with microcontrollers, circuitry, and the materials of science.
          I'm picking up welding, 3d printing, and fiddling with Arduinos now,
          hopefully reaching marketable quality in a reasonable timeframe.
          This year, in 2020, I will be building a spaceship from scratch --
          completely air-tight and free-floating in a vacuum chamber --
          as a platform to facilitate and furthur research in any environment or system.
          This great project, my primary focus, is documented on my personal blog, linked below.
        </p>

        <hr/>

        <p>
          I like to think big, and couldn't see myself trying for anything less than the best.
          When I make something, it's going to have to be worth the life I spent (wasted) laboring over it.
          Every skill gained and adventure coding will be an endeavor to complete my life's work.
          That's just how I learn.
        </p>
      </div>
    )
  }
}

class ProjectList extends React.Component {
  render () {
    return (
      <LinkList vertical="true">
        <Project name="The Odin Projects" address="https://theodinprojects.live">
          <p>
            A collection of all the projects in The Odin Project,
            the open-source full-stack web development bootcamp based on Ruby on Rails.
          </p>
          <h3>Notable Projects include:</h3>
          <LinkList>
            <LinkItem name="Where's Waldo" address="https://theodinprojects.live/courses/javascript/projects/wheres-waldo" />
            <LinkItem name="React Library" address="https://theodinprojects.live/courses/javascript/projects/react-library" />
            <LinkItem name="Todo List" address="https://theodinprojects.live/courses/javascript/projects/todo-list" />
          </LinkList>
        </Project>
        <hr/>
        <Project name="The Railroad" address="https://the.telepathy.dev">
          <p>
            My primary focus for the foreseeable future and main source of motivation.
            This combination blog, archive, and forum houses all things related the
            research and development of what is essentially a human time-capsule now,
            later a scientific platform for audio-sensory experiments.
          </p>
          <p>
            This is probably my single best work in web dev,
            having a lot of cool features under the hood,
            but is, for security reasons, closed-source.
            If you are a recruitor or a legitimate person seeking access to the source,
            contact me, or you could just wait for when I eventually transition into open-source.
          </p>
        </Project>
      </LinkList>
    )
  }
}

class Project extends React.Component {
  render () {
    return (
      <LinkItem name={this.props.name} address={this.props.name}>
        {this.props.children}
      </LinkItem>
    )
  }
}

// Footer

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <Partition name="external-links">
          <h2>External Links</h2>
          <LinkList>
            <LinkItem name="GitHub" address="https://github.com/Brendaneus"/>
            <LinkItem name="Blog" address="https://the.telepathy.dev"/>
            <LinkItem name="LinkedIn" address="https://www.linkedin.com/in/brendaneus/"/>
          </LinkList>
        </Partition>
        <Partition name="contact">
          <h2>Contact</h2>
          <LinkList>
            <LinkItem pretext="Email:" name="brendaneus@gmail.com" address="mailto:brendaneus@gmail.com"/>
          </LinkList>
        </Partition>
      </footer>
    )
  }
}

class Partition extends React.Component {
  render() {
    return (
      <section className={this.props.name + " partition"}>
        {this.props.children}
      </section>
    )
  }
}

// Misc

class LinkList extends React.Component {
  isVertical() {
    return (this.props.vertical)
      ? "vertical "
      : ""
  }

  render() {
    return (
      <ul className={this.isVertical() + "link-list"}>
        {this.props.children}
      </ul>
    )
  }
}

class LinkItem extends React.Component {
  render() {
    return (
      <li className="link-item">
        <h3>
          {this.props.pretext}
          <a href={this.props.address} target="_blank" rel="noopener noreferrer">
            {this.props.name}
          </a>
        </h3>
        <div className="link-content">
          {this.props.children}
        </div>
      </li>
    )
  }
}

// App

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

// -------------------------------------

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
