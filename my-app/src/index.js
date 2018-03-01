import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Icon, Image, Input, List, Grid, Button } from 'semantic-ui-react';
import casey from './images/CaseyPhotocrop.jpg';
class UHM extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <TopImage/>
          <MidMenu/>
          <MidImage/>
          <ExpUH/>
          <Applynow/>
          <BottomMenu/>
          <Bottom/>
        </div>
    );
  }
}

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless style={{
          backgroundColor: '#024731', border: 'none', boxShadow:'none',
        }} className="headerbg">
          <Container className="headerbg">
            <Menu.Item style={{color:'white'}} >Home</Menu.Item>
            <Menu.Item style={{color:'white'}} >A-Z Index</Menu.Item>
            <Menu.Item style={{color:'white'}} >Directory</Menu.Item>
            <Menu.Item style={{color:'white'}} >Students</Menu.Item>
            <Menu.Item style={{color:'white'}} >Faculty and Staff</Menu.Item>
            <Menu.Item style={{color:'white'}} >Parents</Menu.Item>
            <Menu.Item style={{color:'white'}} >Alumni</Menu.Item>
            <Menu.Item style={{color:'white'}} >MyUH</Menu.Item>
            <Menu.Item position="right" fitted style={{color:'white'}} ><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted style={{color:'white'}} ><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted style={{color:'white'}} ><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted style={{color:'white'}} ><Icon name="flickr"/></Menu.Item>
            <Menu.Item fitted style={{color:'white'}} ><Icon name="youtube"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class TopImage extends React.Component {
  render() {
    return (
        <div>
          <Image size='huge' centered src="http://manoa.hawaii.edu/wp/wp-content/uploads/2017/09/uhm-nameplate@2x.png"
                 style={{padding:'10px 0px 10px 0px'}}
          />
        </div>
    )
  }
}


class MidMenu extends React.Component{
  render() {
    return(
        <div className="midmenu">
          <Menu borderless style={{
            backgroundColor: 'white',

          }} className="topMenu">
            <Container >
              <Dropdown item text="About" icon='none'>
                <Dropdown.Menu>
                  <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="Admissions" icon='none'>
                <Dropdown.Menu>
                  <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="Academics" icon='none'>
                <Dropdown.Menu>
                  <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="Athletics" icon='none'>
                <Dropdown.Menu>
                  <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="Campus Life" icon='none'>
                <Dropdown.Menu>
                  <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="Libraries" icon='none'>
                <Dropdown.Menu>
                  <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="Research" icon='none'>
                <Dropdown.Menu>
                  <Dropdown.Item>My Cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item style={{color:'white'}} >
                <Input action={{ icon: 'search' }} placeholder='search' />
              </Menu.Item>



            </Container>
          </Menu>
        </div>
    )
  }
}

class MidImage extends React.Component{
  render(){
    return(
        <div style={{height: '600px'}}>
          <Image className='Midimage' size='massive' centered src={casey} alt='image' />
        </div>
    )
  }
}


class ExpUH extends React.Component{
  render(){
    return(
        <Container>
        <div className='box'>
          <div className='text expuh'>
            Experience the Education of a Lifetime at UH Mānoa!
            <div className='boxhr'>
            <hr/>
            </div>
          </div>
        </div>

          <Grid style={{
            paddingTop: '20px',
            paddingBottom: '100px',
          }}columns={3} container>
            <Grid.Column>
              <List>
                <List.Item className="header mid">Program of Study</List.Item>
                <List.Item className="text mid" >Find the course that is right for you</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item className="header mid">How to Apply</List.Item>
                <List.Item className="text mid" >Start you UH Mānoa adventure</List.Item>

              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item className="header mid">Paying for College</List.Item>
                <List.Item className="text mid" >Explore financial aid and scholarships</List.Item>
              </List>
            </Grid.Column>
    </Grid>


  </Container>
  )
  }
}

class Applynow extends React.Component{
  render(){
    return(
        <div className='box3'>
        <Grid>
        <Grid.Column width={12}>
          <List>
            <List.Item style={{fontSize: '25px', fontWeight:'bold'}}>#MakeMānoaYours</List.Item>
            <List.Item style={{fontSize: '20px' }}>Improving Lives through education and research</List.Item>
          </List>
        </Grid.Column>

          <Grid.Column width={4}>
            <Button size='massive' color='green'>Apply Now</Button>
          </Grid.Column>

        </Grid>
        </div>
    )
  }
}

class BottomMenu extends React.Component{
  render(){
    return(
        <div className='box4' style={{paddingLeft:'150px'}}>
          <Grid columns={4}>
            <Grid.Column>
            <Image src="http://manoa.hawaii.edu/wp/wp-content/uploads/2017/10/uhm-white-seal-nameplate@2x.png"/>
            </Grid.Column>
              <Grid.Column>
              <List>
              <a style={{color: 'white'}} href="#" class="item"> A-Z Index</a>
              <a style={{color: 'white'}} href="#" class="item"> Academic Calendar</a>
              <a style={{color: 'white'}} href="#" class="item"> Campus Directory</a>
              <a style={{color: 'white'}} href="#" class="item"> Campus Maps</a>
              <a style={{color: 'white'}} href="#" class="item"> Parking & Transportation</a>
              <a style={{color: 'white'}} href="#" class="item"> Visit the Campus</a>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
              <a style={{color: 'white'}} href="#" class="item"> Emergency Information</a>
              <a style={{color: 'white'}} href="#" class="item"> Campus Safety</a>
              <a style={{color: 'white'}} href="#" class="item"> Title IX</a>
              <a style={{color: 'white'}} href="#" class="item"> UH News & Media</a>
              <a style={{color: 'white'}} href="#" class="item"> Press Releases</a>
              <a style={{color: 'white'}} href="#" class="item"> Events</a>
              <a style={{color: 'white'}} href="#" class="item"> Work at UH</a>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
              <a style={{color: 'white'}} href="#" class="item"> Campus Help</a>
              <a style={{color: 'white'}} href="#" class="item"> UH Email</a>
              <a style={{color: 'white'}} href="#" class="item"> MyUH </a>
              <a style={{color: 'white'}} href="#" class="item"> Giving to UH</a>
              <a style={{color: 'white'}} href="#" class="item"> Site Feedback</a>
              <a style={{color: 'white'}} href="#" class="item"> Get Adobe Acrobat Reader</a>
              <a style={{color: 'white'}} href="#" class="item"> UH System</a>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class Bottom extends React.Component{
  render(){
    return(
        <div className='box5'>
          <List>
            <List.Item >The University of Hawaiʻi is an
              <a style={{color: 'white'}} href="#" class="item"> equal opportunity/affirmative action institution</a></List.Item>
            <List.Item >©2017 University of Hawaiʻi at Mānoa • 2500 Campus Road • Honolulu, HI 96822 • (808) 956-8111</List.Item>
          </List>
        </div>
    )
  }
}

ReactDOM.render(<UHM/>, document.getElementById('root'));
