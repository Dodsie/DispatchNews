/* Add to app
import Split from "react-split";

<div>
  <Split
    sizes={[95, 15]}
    minSize={302}
    expandToMin={true}
    className="split"
    gutterSize={5}
    gutterAlign="end"
  >
    <div>
      <NewsCards articles={newsArticles} />
    </div>
    <div
      style={{
        background: "#eeeeee",
        height: "100vh",
        width: "100%",
        display: "flex",
        top: "0",
        right: "0",
        flexDirection: "column",
        border: "1px solid lightgray",
        padding: "0em 1.5em",
      }}
    >
      <Sidebar />
    </div>
  </Split>
</div>;

/* Add to index SASS
.split {
  display: flex;
  flex-direction: row;
}

.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==");
  cursor: col-resize;
}
