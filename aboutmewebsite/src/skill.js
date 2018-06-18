import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './skill.css';
import clang from './images/c.jpg';
import php from './images/php.png';
import android from './images/android.jpg';
import java from './images/java.png';
import javascript from './images/javascript.png';
import sql from './images/sql.png';
class Skills extends Component {
   render() {
      return (
         <div className="decorator">
            <table align="center">
                <tr>
                    <td><img src={clang} alt="clanguage"/></td>
                    <td><img src={php} alt="clanguage"/></td>
                    <td><img src={android} alt="clanguage"/></td>
                </tr>
                <tr>
                    <td><progress min="0" max="100" value="80"/></td>
                    <td><progress min="0" max="100" value="50"/></td>
                    <td><progress min="0" max="100" value="75"/></td>                                
                 </tr>
                <tr>
                    <td><img src={java} alt="clanguage"/></td>
                    <td><img src={javascript} alt="clanguage"/></td>
                    <td><img src={sql} alt="clanguage"/></td>
                </tr>
                <tr>
                    <td><progress min="0" max="100" value="90"/></td>
                    <td><progress min="0" max="100" value="81"/></td>
                    <td><progress min="0" max="100" value="44"/></td>                                
                 </tr>
            </table>
         </div>
      );
   }
}
export default Skills;