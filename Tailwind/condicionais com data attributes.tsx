const [openSelect, setOpenSelect] = useState(false);

<div
    data-openSelect={openSelect}
    className="data-[openSelect=true]:rotate-180"
>
    <Arrow />
</div>
