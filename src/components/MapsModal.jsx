import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';

const MapsModal = ({ clusters, setOpen }) => {
  const tabsTriggers = clusters
    .map((cluster) => {
      return (
        <Tabs.Trigger
          className="text-mauve11 flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-slate-300 px-5 text-[15px] outline-none transition-colors data-[state=active]:bg-transparent data-[state=active]:font-medium dark:bg-slate-500 dark:data-[state=active]:bg-transparent"
          value={cluster.name}
          key={`trigger_${cluster.name}`}
        >
          {cluster.name}
        </Tabs.Trigger>
      );
    })
    .reverse();

  const tabsContents = clusters.map((cluster) => {
    return (
      <Tabs.Content
        className="flex grow items-center justify-center rounded-b-md p-5 outline-none"
        value={cluster.name}
        key={`content_${cluster.name}`}
        id={`id_${cluster.name}`}
      >
        {cluster.cdn_link}
      </Tabs.Content>
    );
  });

  return (
    <>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 opacity-60 dark:bg-slate-100"
        onCLick={() => console.log('click')}
      />
      <div
        className="absolute bottom-40 left-12 right-12 top-40 z-50 border border-slate-300 bg-white dark:border-none dark:bg-slate-800 xl:left-1/4 xl:right-1/4"
        onClick={() => console.log('click 2')}
      >
        <Tabs.Root defaultValue="c1">
          <Tabs.List className="flex h-8">{tabsTriggers}</Tabs.List>
          {tabsContents}
        </Tabs.Root>
      </div>
    </>
  );
};

export default MapsModal;
