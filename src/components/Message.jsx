function Message(props) {
  const { text, icon, children } = props;
  return (
    <p>
      {icon} {text} - {children}
    </p>
  );
}

export default Message;
