import React,{ Fragment } from 'react'
import ReactDropZone from 'react-dropzone'

export default class DropzoneComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            fileArr: []
        }

        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(acceptFile, rejectFile){
        let { fileArr } = this.state;
        
        console.log('acceptFile ======>', acceptFile)
        console.log('rejectFile ======>', rejectFile)
        if(rejectFile.length){
            alert('不支持该格式')
            return;
        }
        acceptFile.map( item => {
            fileArr.push(item)
        })

        

        this.setState({
            fileArr,
        })

    }

    render(){
        const { fileArr } = this.state;
        return(
            <div className="dropzone">
                <div className="upload initUpload">
                    <p>
                        原上传文件方式
                    </p>
                    <input type="file"/>
                </div>
                <div className="upload dropzoneUpload">
                    <p>
                        dropzone上传方式
                    </p>
                    <ReactDropZone 
                        className="dropZoneStyles"
                        activeClassName="dragStyles"
                        acceptClassName="addDropZoneStyles"
                        accept="image/*"
                        onDrop = {this.handleDrop}
                    >
                    <span>+</span>
                    </ReactDropZone>
                    { 
                        fileArr.length ? fileArr.map( (item, index) => (
                            <p >{item.name}</p>     
                        )) : <p>未选择任何文件</p>
                    }
                </div>
                {
                    fileArr.length > 0 && fileArr.map( (item, index) => (
                    <div key={index} className="previewDiv">
                        <h3>预览</h3>
                        <img alt="Preview" src={item.preview} className="previewImg"/>
                    </div>))
                }
            </div>
        )
    }
}

// export default class Uploadtwo extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       uploadedFile: null,
//       uploadedFileCloudinaryUrl: ''
//     };
//   }

//   onImageDrop(files) {
//     this.setState({
//       uploadedFile: files[0]
//     });

//     this.handleImageUpload(files[0]);
//   }

//   handleImageUpload(file) {
//     let upload = request.post(CLOUDINARY_UPLOAD_URL)
//                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
//                      .field('file', file);

//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }

//       if (response.body.secure_url !== '') {
//         this.setState({
//           uploadedFileCloudinaryUrl: response.body.secure_url
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <form>
//         <div className="FileUpload">
//           <Dropzone
//             onDrop={this.onImageDrop.bind(this)}
//             multiple={false}
//             accept="image/*">
//             <div>Drop an image or click to select a file to upload.</div>
//           </Dropzone>
//         </div>

//         <div>
//           {this.state.uploadedFileCloudinaryUrl === '' ? null :
//           <div>
//             <p>{this.state.uploadedFile.name}</p>
//             <img src={this.state.uploadedFileCloudinaryUrl} />
//           </div>}
//         </div>
//       </form>
//     )
//   }
// }