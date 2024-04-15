const header = React.createElement("div",{id:"header1"},
[
    React.createElement("div",{id:"child1"},
    [
        React.createElement("h1",{},"I am a H1 tag"),
        React.createElement("h2",{},"I am a H2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am a child2 H1 tag"),
        React.createElement("h2",{},"I am a child2 H2 tag")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header)