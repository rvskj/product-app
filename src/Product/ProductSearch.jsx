import { useEffect, useRef, useState, useTransition } from 'react';
import { SearchProduct } from './ProductUtility';

const ProductSearch = ({ setData }) => {
    const inputRef = useRef(null);
    const [transition, startTransition] = useTransition();
    const [focus, setFocus] = useState(Boolean);

    function handleSearch() {
        let id = null;
        return () => {
            if (id)
                clearTimeout(id);
            id = setTimeout(() => {
                let searchText = inputRef.current.value;
                startTransition(async () => {
                    await SearchProduct(searchText).then(response => {
                        setFocus(!focus)
                        setData(response)
                    })
                });
            }, 500)
        }
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [focus]);
    useEffect(() => {
        inputRef.current.focus();
        ActionClearTextInput();
    }, [])

    const ActionClearTextInput = () => {
        inputRef.current.value = null;
        inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
    return (
        <div className='row' style={{ width: '800' }}>
            <div className='col-sm-8'>
                <input ref={inputRef} type="text" name="searchTextInput" placeholder='Enter product name'
                    disabled={transition} onChange={handleSearch()}></input></div>
            <div className='col-sm-1'>
                &nbsp;</div>
            <div className='col-sm-3'>
                <button name="clearTextInput" onClick={ActionClearTextInput} className='btn btn-secondary'>Clear</button>
            </div>
        </div >
    );
};

export default ProductSearch;