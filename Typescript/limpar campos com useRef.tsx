import { useRef } from "react";
import { TextField, Button } from '@mui/material';

export default function App() {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="App">
            <TextField label="Student Name" inputRef={inputRef} />
            <Button
                onClick={() => {
                    if (inputRef.current != null) {
                        inputRef.current.value = "";
                    }
                }}
                variant="contained"
                color="primary"
            >
                Reset
            </Button>
        </div>
    );
}