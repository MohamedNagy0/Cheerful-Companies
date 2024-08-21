import nfImage from "../../assets/images/notfound.jpg";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <img src={nfImage} alt="not Found Img" className="mx-auto w-1/2" />
      </div>
    </>
  );
}
