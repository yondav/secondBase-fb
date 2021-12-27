/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoIosCloudUpload } from 'react-icons/io';
import { con } from '../../../utils/console';
import Spinner from '../../spinner';
import { compressFile } from './actions';
import { Form } from '..';

const Uploader = ({ single, images, uploadTask }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    clickable: true,
    onDrop: files => upload(files),
  });

  const upload = files => {
    console.log(files.length, images);
    if ((single && files.length > 1) || (single && images.length >= 1)) {
      con.fail('only allowed one file upload');
      return;
    }

    setIsLoading(true);

    files.forEach(async file => {
      const compressed = await compressFile(file);
      // console.log(compressed);
      const res = await uploadTask(compressed);
      console.log(res);
      if (res) setIsLoading(false);
    });
  };

  return (
    <div
      {...getRootProps({ className: 'dropzone' })}
      tw='flex h-96 md:mx-24 lg:mx-36 justify-center items-center p-5 cursor-pointer bg-gray-150 dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out'
    >
      {!isLoading ? (
        <>
          <Form.Input {...getInputProps()} />
          <div tw='relative w-40 h-40 border-dashed border-4 rounded-lg border-gray-500 text-gray-500 hover:(text-gray-650) dark:(border-gray-800 text-gray-750 hover:text-gray-600) p-3 flex items-center justify-center transition-all duration-300 ease-in'>
            <div tw='flex flex-col items-center'>
              <IoIosCloudUpload size={'3.5em'} />
              <h5>Drag and Drop images here</h5>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Uploader;
