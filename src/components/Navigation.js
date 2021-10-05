import React from "react";
// import SpaceLogo from "../public/Space.svg";

function Navigation(props) {
  return (
    <div className="navigation">
      {/* <img src={SpaceLogo} className="Space" alt="logo Space" /> */}
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="logo-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="111"
              height="29"
              fill="none"
              viewBox="0 0 111 29"
            >
              <g fill="#23242A" opacity=".63">
                <path d="M24.824 5.772c-.999 0-1.695-.474-2.089-1.422-1.453 0-3.047.353-4.783 1.06-1.08.443-1.806.852-2.18 1.225-.373.374-.575.666-.605.878-.02.212.086.394.318.545.232.141.555.278.969.409.423.131.913.262 1.468.393 2.906.676 4.748 1.146 5.525 1.408 1.544.515 2.7 1.08 3.466 1.695.727.616 1.09 1.454 1.09 2.513 0 .878-.273 1.62-.817 2.225-.535.606-1.247 1.145-2.135 1.62-.888.474-1.882.898-2.982 1.271-1.09.364-2.245.676-3.466.939-1.21.262-2.407.48-3.587.65-2.311.324-4.284.485-5.919.485-2.977 0-5.272-.358-6.887-1.075-.606-.272-1.1-.953-1.483-2.043-.303-.898-.455-1.635-.455-2.21 0-.585.05-.908.152-.969.1-.06.308-.06.62 0 .313.05.722.141 1.227.273l1.816.484c2.815.706 5.792 1.06 8.93 1.06 2.312 0 4.27-.207 5.874-.621.948-.252 1.453-.535 1.513-.848.04-.272-.706-.61-2.24-1.014-.696-.192-1.504-.393-2.422-.605-4.45-1.08-7.134-1.776-8.053-2.09-.918-.312-1.518-.59-1.8-.832-.273-.242-.5-.51-.682-.802-.333-.575-.5-1.12-.5-1.635 0-.524.026-.928.076-1.21.06-.283.141-.546.242-.788.212-.494.48-.832.803-1.014 2.593-1.453 6.402-2.73 11.428-3.83C21.726.91 25.404.414 28.29.414c.585 0 1.024.101 1.316.303.505.373.727.772.666 1.196-.06.423-.191.817-.393 1.18-.192.353-.434.676-.727.969-.292.283-.62.535-.984.757-.353.212-.721.388-1.105.53-.767.282-1.513.423-2.24.423z" />
                <path d="M35.292 17.216c.333-.142.797-.364 1.393-.666 3.643-1.867 5.64-2.896 5.994-3.088l.636-.348c.656-.424.958-.757.908-1-.111-.514-.389-.72-.833-.62-.444.091-.908.217-1.392.379-.475.161-.98.358-1.514.59-1.12.464-2.104.928-2.952 1.393-2.966 1.705-4.752 2.74-5.358 3.103-.434.978-.822 1.952-1.165 2.92l-1.832 5.178c-.575 1.604-1.155 2.689-1.74 3.254-.314.313-.662.47-1.045.47-.949 0-1.695-.334-2.24-1-.545-.656-.818-1.493-.818-2.512 0-1.01.131-2.009.394-2.997.262-.98.625-1.973 1.09-2.982.938-2.039 2.194-3.941 3.769-5.707.958-2.573 2.553-5.07 4.783-7.493 1.362-1.473 2.629-2.512 3.8-3.118.584-.303 1.084-.454 1.498-.454.413 0 .726.096.938.288.212.181.318.413.318.696 0 .272-.086.62-.257 1.044-.172.424-.404.898-.697 1.423-.292.525-.635 1.085-1.029 1.68l-1.256 1.832c-.101.151-.152.288-.152.409 0 .191.116.287.349.287.262 0 .746-.166 1.453-.5l2.422-1.12c2.119-.958 4.147-1.437 6.085-1.437 1.009 0 1.957.479 2.845 1.438.898.968 1.347 2.008 1.347 3.118 0 1.715-.701 3.037-2.104 3.966l-1.877 1.24c-.676.425-1.372.843-2.088 1.257l-2.18 1.196c-2.452 1.271-4.35 1.907-5.692 1.907-1.332 0-2.3-.166-2.906-.5-.605-.332-.908-.802-.908-1.407 0-.817.671-1.524 2.013-2.12z" />
                <path d="M75.958 9.632c.323 0 .484.273.484.818 0 .938-.656 2.154-1.967 3.648l-.863.878c-2.614 2.613-5.076 4.354-7.387 5.222-1.433.535-2.462.51-3.088-.076-.515-.494-.923-1.292-1.226-2.392l-.363-1.316-3.224 1.982-1.862 1.06c-2.22 1.211-3.885 1.817-4.995 1.817-1.423 0-2.609-.55-3.557-1.65-.909-1.04-1.363-2.246-1.363-3.618 0-1.352.54-2.558 1.62-3.618 1.544-1.514 3.98-2.901 7.31-4.162 3.15-1.181 5.692-1.771 7.63-1.771.656 0 .984.323.984.968 0 .444-.086.777-.258 1-.171.221-.524.448-1.06.68l-1.906.818c-2.826 1.18-4.895 2.407-6.206 3.678-.374.353-.56.696-.56 1.03 0 .332.267.499.802.499.524 0 1.745-.565 3.663-1.695l1.256-.742c1.948-1.17 3.577-1.756 4.89-1.756 1.11 0 1.846.49 2.21 1.468.09.263.176.53.257.803.08.262.161.5.242.711.181.495.343.742.484.742.151 0 .363-.07.636-.212.272-.152.57-.338.893-.56.333-.232.676-.485 1.03-.757l1.83-1.468c1.626-1.353 2.847-2.029 3.664-2.029z" />
                <path d="M93.434 11.237c0 .474-.62 1.392-1.862 2.755-1.271 1.382-2.517 2.507-3.739 3.375-2.36 1.756-4.98 2.957-7.855 3.603-1.09.252-2.125.378-3.103.378-.97 0-1.776-.086-2.422-.257-.636-.162-1.211-.379-1.726-.651-.505-.283-.943-.606-1.317-.969-.373-.363-.686-.747-.938-1.15-.495-.787-.742-1.514-.742-2.18 0-.666.076-1.251.227-1.756.141-.504.343-.984.606-1.438.918-1.655 2.764-3.118 5.54-4.39 2.19-1.019 4.278-1.68 6.266-1.982.858-.131 1.468-.197 1.832-.197.363 0 .666.04.908.121.252.07.47.172.65.303.404.292.606.691.606 1.196 0 .504-.13.983-.393 1.438-.263.444-.596.817-1 1.12-.786.585-1.664.878-2.633.878-1.322 0-2.412-.172-3.27-.515-.595.212-1.1.6-1.513 1.165-.343.465-.515.883-.515 1.257 0 .363.08.721.242 1.075.172.343.409.65.712.923.666.585 1.468.878 2.406.878 2.18 0 4.718-1.156 7.614-3.466l1.378-1.075c1.453-1.11 2.487-1.665 3.103-1.665.625 0 .938.408.938 1.226z" />
                <path d="M109.911 9.875c.485 0 .727.272.727.817 0 .363-.126.822-.379 1.377-.242.545-.595 1.06-1.059 1.544-.464.475-.999.969-1.605 1.484-.595.514-1.296 1.054-2.104 1.62-.797.564-1.68 1.125-2.649 1.68-.968.555-1.998 1.054-3.087 1.498-2.412.989-4.748 1.483-7.009 1.483-1.725 0-3.234-.449-4.526-1.347-1.352-.938-2.028-2.078-2.028-3.42 0-2.11 1.135-4.113 3.406-6.01 1.957-1.635 4.263-2.901 6.917-3.8 1.615-.544 2.982-.817 4.102-.817.909 0 1.676.222 2.301.666.666.485.999 1.136.999 1.953 0 1.282-1.014 2.7-3.042 4.253-.323.253-.616.465-.878.636l-.545.363c-1.01.707-2.543 1.499-4.602 2.377.636.333 1.226.5 1.771.5.555 0 1.05-.066 1.484-.197.444-.131.943-.318 1.498-.56.555-.243 1.146-.53 1.771-.863.636-.343 1.277-.717 1.923-1.12 1.443-.898 2.694-1.817 3.754-2.755.555-.515 1.261-.924 2.119-1.226.282-.091.529-.136.741-.136zm-16.695 4.253l.832-.424c.272-.141.515-.272.727-.394 2.038-1.17 3.198-1.892 3.481-2.164.283-.273.424-.46.424-.56 0-.111-.03-.237-.09-.379-.062-.14-.142-.267-.243-.378-.242-.282-.5-.424-.772-.424-.273 0-.575.05-.908.152-.323.1-.651.242-.984.423-.333.172-.656.384-.969.636-.303.242-.57.505-.802.787-.535.636-.802 1.186-.802 1.65 0 .464.035.823.106 1.075z" />
              </g>
            </svg>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Templates</a>
              </li>
              <li>
                <a href="/">Price</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Get in Touch</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;