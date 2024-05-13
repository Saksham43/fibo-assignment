import React from 'react'
import { Chart } from '@coreui/react-chartjs'

const Graph = () => {


  return (
    <div className='graph'>
        <div className='container'>
            
            <ul className='y-meter'>
                <li><div>100%</div></li>
                <li><div>80%</div></li>
                <li><div>60%</div></li>
                <li><div>40%</div></li>
                <li style={{paddingBottom: "6px"}}><div>20%</div></li>
            </ul>
            
                <div className='bar one'>
                    <p>92</p>
                    <div style={{height: "138px"}}></div>
                    <p></p>
                </div>
                
                <div className='bar two'>
                    <p>100</p>
                    <div style={{height: "150px"}}></div>
                    <p></p>
                </div>

                <div className='bar three'>
                    <p>98</p>
                    <div style={{height: "147px"}}></div>
                    <p></p>
                </div>

                <div className='bar four'>
                    <p>90</p>
                    <div style={{height: "135px"}}></div>
                    <p></p>
                </div>

                <div className='bar five'>
                    <p>84</p>
                    <div style={{height: "126px"}}></div>
                    <p></p>
                </div>

                <div className='bar six'>
                    <p>82</p>
                    <div style={{height: "123px"}}></div>
                    <p></p>
                </div>

                <div className='bar seven'>
                    <p>80</p>
                    <div style={{height: "120px"}}></div>
                    <p></p>
                </div>
                
                <div className='bar eight'>
                    <p>80</p>
                    <div style={{height: "120px"}}></div>
                    <p></p>
                </div>
        </div>
        <div className='x-axis'>
            <p style={{visibility: 'hidden'}}>saxam</p>
            <p>28/4</p>
            <p>30/4</p>
            <p>02/5</p>
            <p>05/5</p>
            <p>11/5</p>
            <p>15/5</p>
            <p>15/5</p>
            <p>22/5</p>
        </div>
    </div>
  )
}

export default Graph
