import type { ReactNode } from 'react';
import { Button } from 'react-bootstrap';

type MyButtonProps = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'Dark' | 'Link';
  size?: 'sm' | 'lg';
  disabled?: boolean;
  icon?: ReactNode;
}

function MyButton({label, onClick, type= 'button', variant='light'}: MyButtonProps) {
  return (
    <Button variant={variant} type={type} onClick={onClick}>{label}</Button>
  )
}

export default MyButton;