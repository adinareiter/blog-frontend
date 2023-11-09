import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      //   // <!-- Button trigger modal -->
      //   // <div>
      //   //   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      //   //     Launch demo modal
      //   //   </button>

      //     {/* <!-- Modal --> */}
      //     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      //       <div class="modal-dialog">
      //         <div class="modal-content">
      //           <div class="modal-header">
      //             <h1 class="modal-title fs-5" id="exampleModalLabel">
      //               Modal title
      //             </h1>
      //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      //           </div>
      //           <div class="modal-body">...</div>
      //           <div class="modal-footer">
      //             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      //               Close
      //             </button>
      //             <button type="button" class="btn btn-primary">
      //               Save changes
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
