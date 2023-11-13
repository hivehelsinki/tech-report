import React, { useState } from 'react';
import GlobeIcon from '@/components/GlobeIcon';
import MapsModal from '@/components/MapsModal';

const ClustersMaps = ({ clusters }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => handleOpen()}>
        <GlobeIcon />
      </div>
      {open && <MapsModal clusters={clusters} setOpen={setOpen} />}
    </div>
  );
};

export default ClustersMaps;
