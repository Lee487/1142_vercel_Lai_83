import { fetchBlogsLocal } from '@/action/blog.action_83';

const BlogPage_83 = async () => {
  const blogs = await fetchBlogsLocal();
  return (
    <section className='py-8'>
      <div className='section-title mb-8'>
        <h2 className='text-2xl text-center border-2 border-red-500 p-2'>
          Blogs From Local Json -- Lai, 213410383
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogs.map((blog) => {
          const { id, title, descrip, category, remote_url } = blog;
          return (
            <article key={id} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105'>
              <img src={remote_url} alt={title} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <div className='flex items-center space-x-2 text-blue-500 uppercase text-xs font-bold mb-2'>
                  <span>{category}</span>
                  {category === 'lifestyle' ? (
                    <span role='img' aria-label='lifestyle'>☕</span>
                  ) : (
                    <span role='img' aria-label='travel'>🌐</span>
                  )}
                </div>
                <h3 className='text-lg font-bold mb-2'>{title}</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>{descrip}</p>
                <div className='flex justify-between items-center'>
                  <a href='#' className='text-blue-600 dark:text-blue-400 font-medium hover:underline'>Read More</a>
                  <button className='bg-red-100 text-red-600 px-3 py-1 rounded text-xs hover:bg-red-200 transition'>Delete</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPage_83;
