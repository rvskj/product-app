import { useEffect, useRef, useState, useTransition } from 'react';
import { SearchProduct } from './ProductUtility';

const ProductSearch = ({ setData }) => {
    const inputRef = useRef();
    const [transition, startTransition] = useTransition();
    function handleSearch() {
        let id = null;
        return () => {
            if (id)
                clearTimeout(id);
            id = setTimeout(() => {
                let searchText = inputRef.current.value;
                startTransition(async () => {
                    await SearchProduct(searchText).then(response => {
                        setData(response)
                    })
                });
            }, 500)
        }
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [transition])
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
            <div className="col-sm-5" style={{ color: 'blue', fontWeight: 'bold', textAlign: "left" }}>Product App</div>
            <div className='col-sm-7' style={{ textAlign: "right" }}>
                <input ref={inputRef} type="text" name="searchTextInput" placeholder='Search product by name'
                    disabled={transition} onChange={handleSearch()}></input>
                &nbsp;
                <button name="clearTextInput" onClick={ActionClearTextInput} className='btn btn-secondary'>Clear</button>
            </div>
        </div >
    );
};

export default ProductSearch;