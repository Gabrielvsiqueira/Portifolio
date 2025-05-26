import type { ReactNode } from 'react';
import { Button } from 'react-bootstrap';

type MyButtonProps = {
  label?: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' | 'link';
  size?: 'sm' | 'lg';
  disabled?: boolean;
  icon?: ReactNode;
  className?: string; 
};

function MyButton({ label, onClick, type = 'button', variant = 'light', size, disabled = false, icon, className = '' }: MyButtonProps){
  return (
    <Button variant={variant} type={type} className={`my-button-base ${className}`} onClick={onClick} size={size} disabled={disabled}>
      {icon && <span style={{ marginRight: label ? '0.5rem' : 0 }}>{icon}</span>}
      {label}
    </Button>
  );
}

export default MyButton;
