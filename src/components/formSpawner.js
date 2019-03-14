import React from "react";

import NewEntryForm from "./newentryform";

const FormSpawner = props => (
    <div className="my-3">
        <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target={"#entryform-" + props.listId}
            aria-expanded="false"
            aria-controls={"entryForm-" + props.listId}
        >
            Add a new entry
        </button>
        <div className="collapse" id={"entryform-" + props.listId}>
            <NewEntryForm listId={props.listId} />
        </div>
    </div>
);
export default FormSpawner;
