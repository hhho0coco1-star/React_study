
export default function TextItem({ title, content }) {
    
    return (
        <div className="textItem">
            <p className="title">제목 : {title}</p>
            <p>내용 : {content}</p>
        </div>  
    )
}