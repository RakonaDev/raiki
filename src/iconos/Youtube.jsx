function YoutubeIcon(props) {
  return (
    <>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3175 8.72095L8.27904 10.7679C7.81229 11.0004 7.26637 10.663 7.26637 10.1322V6.0383C7.26637 5.5137 7.81229 5.16397 8.27904 5.40261L12.3175 7.44957C12.835 7.7129 12.835 8.45763 12.3175 8.72095ZM17.2489 0.84375H2.72465C1.29191 0.84375 0.131104 2.02667 0.131104 3.47909V12.6935C0.131104 14.1459 1.29394 15.3227 2.72465 15.3227H17.2489C18.6877 15.3227 19.8485 14.1439 19.8485 12.6935V3.47909C19.8485 2.02667 18.6857 0.84375 17.2489 0.84375Z"
          fill={props.color}
        />
      </svg>
    </>
  );
}

export default YoutubeIcon;
