interface AlertProps {
  alertName: string;
}

const Alert = ({ alertName }: AlertProps) => {
  return <div className="alert alert-primary">{alertName}</div>;
};

export default Alert;
