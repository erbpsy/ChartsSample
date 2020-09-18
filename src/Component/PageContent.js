import React, { Component } from 'react';
import * as RequestService from '../RequestService'
import PiChart from './PiChart';
import PieChart2 from './PieChart2';
import PieChart3 from './PieChart3';



class PageContent extends Component {
    constructor(props) {
        super(props);
        this.selectGRP = this.selectGRP.bind(this);
        this.ActivateClaimStatus = this.ActivateClaimStatus.bind(this);
        this.ActivateMemberDetails = this.ActivateMemberDetails.bind(this);
        this.state = {
            showMessage: true,
            isLoaded: false,
            grp_details: [],
            members_details: [],
            member_visit_details: [],
            enrolment_status:[],
            is_grp_selected: false,
            isActive_claimStatus: false,
            isActive_MemberDetails: false,

        }
    }

    selectGRP = () => {
        this.setState({ is_grp_selected: true });
        
    }
    ActivateClaimStatus = () => {
        debugger;
        this.setState({
            isActive_claimStatus: true,
            isActive_MemberDetails: false
        });
    }
    ActivateMemberDetails = () => {
        debugger;
        this.setState({
            isActive_MemberDetails: true,
            isActive_claimStatus: false,
        });
    }

    componentDidMount() {
        this.setState({
            grp_details: [
                { PCPID: 1, PCPName: 'Larvel1', ContractStartDate: '05/11/2018', ContractEndDate: '05/11/2018', PayerName: 'larvelPayer 1', FinalizeClaims: 10, PendingClaims: 15, MissingService: 'LarvelService 1', CongeService: 'LarvelCongeService 1', ProcType: 'LarvelProc type 1' },
                { PCPID: 2, PCPName: 'Larvel2', ContractStartDate: '05/11/2018', ContractEndDate: '05/11/2018', PayerName: 'larvelPayer 2', FinalizeClaims: 20, PendingClaims: 25, MissingService: 'LarvelService 2', CongeService: 'LarvelCongeService 2', ProcType: 'LarvelProc type 2' },
                { PCPID: 3, PCPName: 'Larvel3', ContractStartDate: '05/11/2018', ContractEndDate: '05/11/2018', PayerName: 'larvelPayer 3', FinalizeClaims: 30, PendingClaims: 35, MissingService: 'LarvelService 3', CongeService: 'LarvelCongeService 3', ProcType: 'LarvelProc type 3' },
                { PCPID: 4, PCPName: 'Larvel4', ContractStartDate: '05/11/2018', ContractEndDate: '05/11/2018', PayerName: 'larvelPayer 4', FinalizeClaims: 40, PendingClaims: 45, MissingService: 'LarvelService 4', CongeService: 'LarvelCongeService 4', ProcType: 'LarvelProc type 4' },
                { PCPID: 5, PCPName: 'Larvel5', ContractStartDate: '05/11/2018', ContractEndDate: '05/11/2018', PayerName: 'larvelPayer 5', FinalizeClaims: 50, PendingClaims: 55, MissingService: 'LarvelService 5', CongeService: 'LarvelCongeService 5', ProcType: 'LarvelProc type 5' },
                { PCPID: 6, PCPName: 'Larvel6', ContractStartDate: '05/11/2018', ContractEndDate: '05/11/2018', PayerName: 'larvelPayer 6', FinalizeClaims: 60, PendingClaims: 65, MissingService: 'LarvelService 6', CongeService: 'LarvelCongeService 6', ProcType: 'LarvelProc type 6' }
            ],
            members_details: [
                { MemebrId: 1, MemberName: 'Larvel 1', Age: '21', MemebreContact: '+90876543211', MostRecentServiceDate: '05/11/2018', Auth: 'Auth 1', MostRecentDiagnosis: 'ENT1', TotalVisits: 11, CostOfCurrentClaims: 121, TotalClaimsCost: 500 },
                { MemebrId: 2, MemberName: 'Larvel 2', Age: '22', MemebreContact: '+90876543212', MostRecentServiceDate: '05/11/2018', Auth: 'Auth 2', MostRecentDiagnosis: 'ENT2', TotalVisits: 12, CostOfCurrentClaims: 122, TotalClaimsCost: 500 },
                { MemebrId: 3, MemberName: 'Larvel 3', Age: '23', MemebreContact: '+90876543213', MostRecentServiceDate: '05/11/2018', Auth: 'Auth 3', MostRecentDiagnosis: 'ENT3', TotalVisits: 13, CostOfCurrentClaims: 123, TotalClaimsCost: 500 },
                { MemebrId: 4, MemberName: 'Larvel 4', Age: '24', MemebreContact: '+90876543214', MostRecentServiceDate: '05/11/2018', Auth: 'Auth 4', MostRecentDiagnosis: 'ENT4', TotalVisits: 14, CostOfCurrentClaims: 124, TotalClaimsCost: 500 },
                { MemebrId: 5, MemberName: 'Larvel 5', Age: '25', MemebreContact: '+90876543215', MostRecentServiceDate: '05/11/2018', Auth: 'Auth 5', MostRecentDiagnosis: 'ENT5', TotalVisits: 15, CostOfCurrentClaims: 125, TotalClaimsCost: 500 }
            ],
            member_visit_details: [
                { MemVisitDate: '01/11/2018', DiagnosisDescription: 'Diagnosis Description1', MemberBenefits: 'MemberBenefits 1', Membercopay: 'Membercopay 1', Billtopayer: 100, TotalCostofclaims: 100, ClaimsId: 1001, ClaimsDescription: 'ClaimsDescription 1' },
                { MemVisitDate: '02/11/2018', DiagnosisDescription: 'Diagnosis Description2', MemberBenefits: 'MemberBenefits 2', Membercopay: 'Membercopay 2', Billtopayer: 200, TotalCostofclaims: 200, ClaimsId: 2002, ClaimsDescription: 'ClaimsDescription 2' },
                { MemVisitDate: '03/11/2018', DiagnosisDescription: 'Diagnosis Description3', MemberBenefits: 'MemberBenefits 3', Membercopay: 'Membercopay 3', Billtopayer: 300, TotalCostofclaims: 300, ClaimsId: 3003, ClaimsDescription: 'ClaimsDescription 3' },
                { MemVisitDate: '04/11/2018', DiagnosisDescription: 'Diagnosis Description4', MemberBenefits: 'MemberBenefits 4', Membercopay: 'Membercopay 4', Billtopayer: 400, TotalCostofclaims: 400, ClaimsId: 4004, ClaimsDescription: 'ClaimsDescription 4' },
                { MemVisitDate: '05/11/2018', DiagnosisDescription: 'Diagnosis Description5', MemberBenefits: 'MemberBenefits 5', Membercopay: 'Membercopay 5', Billtopayer: 500, TotalCostofclaims: 500, ClaimsId: 5005, ClaimsDescription: 'ClaimsDescription 5' },
                { MemVisitDate: '06/11/2018', DiagnosisDescription: 'Diagnosis Description6', MemberBenefits: 'MemberBenefits 6', Membercopay: 'Membercopay 6', Billtopayer: 600, TotalCostofclaims: 600, ClaimsId: 6006, ClaimsDescription: 'ClaimsDescription 6' }
            ],
            enrolment_status:[
                {EnrollmentStatus:'EnrollmentStatus 1', PayerName:'PayerName 1', Missing:1 , Completed:10},
                {EnrollmentStatus:'EnrollmentStatus 2', PayerName:'PayerName 2', Missing:2 , Completed:20},
                {EnrollmentStatus:'EnrollmentStatus 3', PayerName:'PayerName 3', Missing:3 , Completed:30},
                {EnrollmentStatus:'EnrollmentStatus 4', PayerName:'PayerName 4', Missing:4 , Completed:40},
                {EnrollmentStatus:'EnrollmentStatus 5', PayerName:'PayerName 5', Missing:5 , Completed:50}
                ]
        })
    }

    render() {

        return (
            <div ui-view="" className="content-background">
                <div className="row alerts-container" data-ng-controller="AlertsCtrl" data-ng-show="alerts.length">
                    <div className="col-xs-12"></div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="widget" >
                            <div icon="fa-tasks" title="Servers" className="ng-scope ng-isolate-scope">
                                <div className="widget-header ng-binding">
                                    <div className="col-lg-6"> <i className="fa fa-tasks icon" ></i>
                                        GRP Details</div>
                                    <div className="col-lg-6" >
                                        <div className='text-right'> <strong>GRP NAME:</strong> GRP NAME 1</div>
                                        <div className='text-right'> <strong>GRP ID:</strong> 1</div>
                                    </div>
                                    <div className='cleadboth'></div>
                                </div>
                            </div>
                            <div className="ng-scope ng-isolate-scope medium no-padding">
                                <div className="widget-body medium no-padding classnamees" >
                                    <div ng-show="loading" className="ng-hide">
                                        <div className="loading">
                                            <div className="double-bounce1"></div>
                                            <div className="double-bounce2"></div>
                                        </div>
                                    </div>
                                    <div ng-hide="loading" className="widget-content" >
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>PCPID</th>
                                                        <th>PCP Name</th>
                                                        <th>Contract Start Date</th>
                                                        <th>Contract End Date</th>
                                                        <th>Payer Name</th>
                                                        <th>Finalize Claims</th>
                                                        <th>Pending Claims</th>
                                                        <th>Missing Service</th>
                                                        <th>CongeService</th>
                                                        <th>PROC Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {


                                                        this.state.grp_details.map(function (item, index) {
                                                            return (<tr key={index}>
                                                                <td>{item.PCPID}</td>
                                                                <td><a onClick={this.selectGRP} > {item.PCPName}</a></td>
                                                                <td>{item.ContractStartDate}</td>
                                                                <td>{item.ContractEndDate}</td>
                                                                <td>{item.PayerName}</td>
                                                                <td>${item.FinalizeClaims}.00</td>
                                                                <td>${item.PendingClaims}.00</td>
                                                                <td>{item.MissingService}</td>
                                                                <td>{item.CongeService}</td>
                                                                <td>{item.ProcType}</td>
                                                            </tr>)
                                                        }, this)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state && this.state.is_grp_selected &&
                    <div className="row">
                        <div className="col-lg-4">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <PieChart3 />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <ul className="sidebar">
                                                        <li className="sidebar-list">
                                                            <a className={this.state.isActive_claimStatus ?'activeAnchorClass':''} onClick={this.ActivateClaimStatus}>Claims Status <span className="menu-icon fa fa-tachometer"></span></a>
                                                        </li>
                                                        <li className="sidebar-list">
                                                            <a className={this.state.isActive_MemberDetails ?'activeAnchorClass':''} onClick={this.ActivateMemberDetails}>Member Deatils <span className="menu-icon fa fa-book"></span></a>
                                                        </li>
                                                        <li className="sidebar-list">
                                                            <a >Missing Services <span className="menu-icon fa fa-service"></span></a>
                                                        </li>
                                                    </ul>
                                                    {
                                                        this.state && this.state.isActive_claimStatus &&

                                                        <div id="dvClaimsStatus">
                                                            <hr></hr>
                                                            <div className="select-years">Claims Status :</div>
                                                            <select className="select-years form-control" id="sel1">
                                                                <option>2018</option>
                                                                <option>2017</option>
                                                                <option>2016</option>
                                                                <option>2015</option>
                                                                <option>2014</option>
                                                                <option>2013</option>
                                                                <option>2012</option>
                                                                <option>2011</option>
                                                            </select>
                                                        </div>
                                                    }
                                                    {
                                                        this.state && this.state.isActive_MemberDetails &&

                                                        <div id="dvMemberDetails">
                                                            <hr></hr>
                                                            <div className="select-years">Member Details :</div>
                                                            <select className="select-years form-control" id="sel1">
                                                                <option>2018</option>
                                                                <option>2017</option>
                                                                <option>2016</option>
                                                                <option>2015</option>
                                                                <option>2014</option>
                                                                <option>2013</option>
                                                                <option>2012</option>
                                                                <option>2011</option>
                                                            </select>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    this.state && this.state.isActive_claimStatus &&
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th colSpan="2">CLAIMS TYPE</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>APPROVED CLAIMS</td>
                                                                <td>$100.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>PENDING CLAIMS</td>
                                                                <td>$50.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>DENAIL CLAIMS</td>
                                                                <td>$20.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th colSpan="2">CLAIM DETAILS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>In Patients</td>
                                                                <td>$10.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Out Patient</td>
                                                                <td>$15.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Emergency Room</td>
                                                                <td>$25.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Imaging</td>
                                                                <td>$10.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Pharmacy</td>
                                                                <td>$30.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Labs</td>
                                                                <td>$50.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ancellary Cost</td>
                                                                <td>$25.00</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Sub Total</th>
                                                                <td>$165.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state && this.state.isActive_MemberDetails &&
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Memebr Id</th>
                                                                <th>Member Name</th>
                                                                <th>Age</th>
                                                                <th>Memebre Contact #</th>
                                                                <th>Most Recent Service Date</th>
                                                                <th>Auth #</th>
                                                                <th>Most Recent Diagnosis</th>
                                                                <th>Total Visits</th>
                                                                <th>Cost Of Current Claims</th>
                                                                <th>Total Claims Cost</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.members_details.map(function (item, index) {
                                                                    return (<tr key={index}>
                                                                        <td>{item.MemebrId}</td>
                                                                        <td><a onClick={this.selectGRP} > {item.MemberName}</a></td>
                                                                        <td>{item.Age}</td>
                                                                        <td>{item.MemebreContact}</td>
                                                                        <td>{item.MostRecentServiceDate}</td>
                                                                        <td>{item.Auth}</td>
                                                                        <td>{item.MostRecentDiagnosis}</td>
                                                                        <td>{item.TotalVisits}</td>
                                                                        <td>${item.CostOfCurrentClaims}.00</td>
                                                                        <td>${item.TotalClaimsCost}.00</td>
                                                                    </tr>)
                                                                }, this)
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state && this.state.isActive_MemberDetails &&
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <PiChart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <PieChart2 />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state && this.state.isActive_MemberDetails &&
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive table-cstm">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Mem Visit Date</th>
                                                                <th>Diagnosis Description</th>
                                                                <th>Member Benefits</th>
                                                                <th>Member co-pay</th>
                                                                <th>Bill to payer</th>
                                                                <th>Total Cost of claims</th>
                                                                <th>Claims Id</th>
                                                                <th>Claims Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.member_visit_details.map(function (item, index) {
                                                                    return (<tr key={index}>
                                                                        <td>{item.MemVisitDate}</td>
                                                                        <td>{item.DiagnosisDescription}</td>
                                                                        <td>{item.MemberBenefits}</td>
                                                                        <td>{item.Membercopay}</td>
                                                                        <td>${item.Billtopayer}.00</td>
                                                                        <td>${item.TotalCostofclaims}.00</td>
                                                                        <td>{item.ClaimsId}</td>
                                                                        <td>{item.ClaimsDescription}</td>
                                                                    </tr>)
                                                                }, this)
                                                            }
                                                            <tr>
                                                                <td colSpan="3">Sub Total</td>
                                                                <td></td>
                                                                <td>$2100.00</td>
                                                                <td>$2100.00</td>
                                                                <td></td>
                                                                <td colSpan="3"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <div className="widget" >
                                    <div className="ng-scope ng-isolate-scope medium no-padding">
                                        <div className="widget-body medium no-padding classnamees" >
                                            <div ng-hide="loading" className="widget-content" >
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Enrollment Status</th>
                                                                <th>Payer Name</th>
                                                                <th>Missing / Completed</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.enrolment_status.map(function (item, index) {
                                                                    return (<tr key={index}>
                                                                        <td>{item.EnrollmentStatus}</td>
                                                                        <td>{item.PayerName}</td>
                                                                        <td>{item.Missing}/{item.Completed}</td>
                                                                    </tr>)
                                                                }, this)
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }




            </div>
        );
    }
}

export default PageContent;