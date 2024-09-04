import "./ProfileInfo.css"
const user = {
        name: `Luz Bright Svendsen`,
        imageUrl: `https://no.pinterest.com/pin/155092780907854708/`,
        imageSize: 90, 
}; 






export default function ProfileInfo() {




return (


    <>
        <h1>{user.name}</h1>
        <img>
            className="avatar"
            src={user.imageUrl}
            alt={`Photo of ` + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
           />
        </>
      );
    }


    </>



)
}