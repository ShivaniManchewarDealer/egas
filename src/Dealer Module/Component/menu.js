import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import '../Css/menu.css'
import connection from './connection.png'

function menu() {
    return (
        <div>

<div class="container">
  <div class="row">
    <div class="col-md-4">
     <div class="card1 card-11">
        <h3>Your Profile</h3>
        
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <a><button type="button" class="btn btn-danger">  View  </button></a>
        </div>
     
    </div>
    <div class="col-md-4">
      <div class="card1 card-21">
        <h3>View Customers</h3>
        <p>Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
          of mobile UI components, ready to go.</p>
          <a href="/viewconnections"><button type="button" class="btn btn-danger">  View  </button></a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card1 card-31">
        <h3>View Gas Booking</h3>
        <p>Learn how to easily customize and modify your app’s design to fit your
          brand across all mobile platform styles.</p>
          <a><button type="button" class="btn btn-danger">  View  </button></a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4 change">
      <div class="card1 card-11">
        <h3>View Accessories</h3>
        <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        <a><button type="button" class="btn btn-danger">  View  </button></a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card1 card-21">
        <h3>View staff</h3>
        <p>Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
          of mobile UI components, ready to go.</p>
          <a><button type="button" class="btn btn-danger">  View  </button></a>
      </div>
    </div>
    
  </div>
</div>
        </div>
        
    )
}

export default menu