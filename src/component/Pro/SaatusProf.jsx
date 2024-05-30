import React from "react";

class StatusProf extends React.Component {
    state = {
        
        editMode: false,
        status: this.props.status
    }
    


    onEdit = () => {
        this.setState({
            editMode: true
    })
    }

    offEdit = () => {
        this.setState({
            editMode: false
    })

    this.props.setStatus(this.state.status)
    }

    onCh = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
            }


    componentDidUpdate(prevP, prevS) {

        if(prevP.status !== this.props.status){
        this.setState({
            status: this.props.status
        })}
    }

    render() {

        return <>
        {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.onEdit}>{this.props.status == '' ? '---' : this.props.status}</span>
            </div>}
        {this.state.editMode &&
            <div>
                <input onChange={this.onCh} autoFocus={true} onBlur={this.offEdit} value={this.state.status} />
            </div>}
        </>
    }
}

export default StatusProf