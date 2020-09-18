import React, { Component } from 'react';

class Tables extends Component {
    render(){
        return(
            <div> <div class="row">
            <div class="col-lg-6">
            
                <div icon="fa-tasks" title="Servers">
                  <a href="#">Manage</a>
                </div>
                <div classes="medium no-padding">
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr><td>RDVMPC001</td><td>238.103.133.37</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDVMPC002</td><td>68.66.63.170</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDVMPC003</td><td>76.117.212.33</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>
                        <tr><td>RDPHPC001</td><td>91.88.224.5</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDESX001</td><td>197.188.15.93</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDESX002</td><td>168.85.154.251</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDESX003</td><td>209.25.191.61</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>
                        <tr><td>RDESX004</td><td>252.37.192.235</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDTerminal01</td><td>139.71.18.207</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDTerminal02</td><td>136.80.122.212</td><td><span tooltip="Could not connect!" class="text-warning"><i class="fa fa-flash"></i></span></td></tr>
                        <tr><td>RDDomainCont01</td><td>196.80.245.33</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                      </tbody>
                    </table>
                  </div>      
                </div>
                <div>
                  <ul class="pagination pagination-sm pull-right">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&raquo;</a></li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
            </div>
            <div class="col-lg-6">
                <div icon="fa-tasks" title="Striped Servers">
                  <a href="#">Manage</a>
                </div>
                <div classes="medium no-padding">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr><td>RDVMPC001</td><td>238.103.133.37</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDVMPC002</td><td>68.66.63.170</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDVMPC003</td><td>76.117.212.33</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>
                        <tr><td>RDPHPC001</td><td>91.88.224.5</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDESX001</td><td>197.188.15.93</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDESX002</td><td>168.85.154.251</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDESX003</td><td>209.25.191.61</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>
                        <tr><td>RDESX004</td><td>252.37.192.235</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDTerminal01</td><td>139.71.18.207</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                        <tr><td>RDTerminal02</td><td>136.80.122.212</td><td><span tooltip="Could not connect!" class="text-warning"><i class="fa fa-flash"></i></span></td></tr>
                        <tr><td>RDDomainCont01</td><td>196.80.245.33</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <ul class="pagination pagination-sm pull-right">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">&raquo;</a></li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
            </div>
          </div>
           </div>
        )
    }
}

export default Tables;