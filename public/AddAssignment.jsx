// 'use strict';
//
// import React, {Component} from 'react';
//
// export default class AddAssignment extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return <div>
//             <br/>
//             <h4>Add Assignment</h4>
//             <br/>
//             <form action="/assignment" method='POST'>
//                 <label>
//                     Name:
//                     <input type="text" name="Name"/>
//                 </label>
//                 <br/>
//                 <label>
//                     Document:
//                     <input type="text" name="Document"/>
//                 </label>
//                 <br/>
//                 <label>
//                     Duedate:
//                     <input type="text" name="Duedate"/>
//                 </label>
//                 <br/>
//                 <input type="submit" value="Submit"/>
//             </form>
//         </div>;
//     }
// }

'use strict';

import React, {Component} from 'react';

export default class AddAssignment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <br/>
            <h4>Add Assignment</h4>
            <br/>
            <form action="/assignment" method='POST'>
                <div className="form-group row">
                <label className="col-sm-1 col-form-label">
                    Name</label>
                    <div className="col-sm-9">
                    <input type="text" name="Name"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                <label className="col-sm-1 col-form-label">
                    Document</label>
                    <div className="col-sm-9">
                    <input type="file" name="Document"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                <label className="col-sm-1 col-form-label">
                    Duedate</label>
                    <div className="col-sm-9">
                    <input type="text" name="Duedate"/>
                    </div>
                </div>
                <br/>
                <input type="submit" value="Submit"/>

            </form>
        </div>;
    }
}
