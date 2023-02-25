const GoogleAnalytics = ({ ga_id }) => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', '${ga_id}');
        `,
        }}
      ></script>
    </>
  );
};

export default GoogleAnalytics;
