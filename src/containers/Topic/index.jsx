import React, { Component } from "react";
import App from 'containers/App'
import axios from 'axios'
import { Card } from 'antd'
import './main.less'
import './markdown.less'

const baseUrl = "https://cnodejs.org/api/v1/topic";

class Topic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: {},
            loading: true
        }
    }


    async componentDidMount() {
        const id = this.props.match.params.topic;
        const topic = await this._fetchData(id)
        this.setState({ topic, loading: false })
    }

    async _fetchData(id) {
        const response = await axios.get( `${baseUrl}/${id}` );
        if ( response.data.success ) {
            return response.data.data;
        }
        return;
    }

    render() {
        const { topic } = this.state
        return (
            <App>
                <article>
                    <Card
                        style={ { width: "100%" } }
                        bordered={ false }
                        title={ topic.title }
                        loading={ this.state.loading }
                    >
                        <div dangerouslySetInnerHTML={ { __html: topic.content } }></div>
                    </Card>
                </article>
            </App>
        );
    }
}

export default Topic;
