// This file is automatically generated, do not edit
/* eslint openlayers-internal/no-missing-requires: 0 */
goog.provide('ol.renderer.webgl.tilelayershader');

goog.require('ol');
goog.require('ol.webgl.Fragment');
goog.require('ol.webgl.Vertex');

if (ol.ENABLE_WEBGL) {

  /**
   * @constructor
   * @extends {ol.webgl.Fragment}
   * @struct
   */
  ol.renderer.webgl.tilelayershader.Fragment = function() {
    ol.webgl.Fragment.call(this, ol.renderer.webgl.tilelayershader.Fragment.SOURCE);
  };
  ol.inherits(ol.renderer.webgl.tilelayershader.Fragment, ol.webgl.Fragment);


  /**
   * @const
   * @type {string}
   */
  ol.renderer.webgl.tilelayershader.Fragment.DEBUG_SOURCE = 'precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  gl_FragColor = texture2D(u_texture, v_texCoord);\n}\n';


  /**
   * @const
   * @type {string}
   */
  ol.renderer.webgl.tilelayershader.Fragment.OPTIMIZED_SOURCE = 'precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}';


  /**
   * @const
   * @type {string}
   */
  ol.renderer.webgl.tilelayershader.Fragment.SOURCE = ol.DEBUG_WEBGL ?
    ol.renderer.webgl.tilelayershader.Fragment.DEBUG_SOURCE :
    ol.renderer.webgl.tilelayershader.Fragment.OPTIMIZED_SOURCE;


  ol.renderer.webgl.tilelayershader.fragment = new ol.renderer.webgl.tilelayershader.Fragment();


  /**
   * @constructor
   * @extends {ol.webgl.Vertex}
   * @struct
   */
  ol.renderer.webgl.tilelayershader.Vertex = function() {
    ol.webgl.Vertex.call(this, ol.renderer.webgl.tilelayershader.Vertex.SOURCE);
  };
  ol.inherits(ol.renderer.webgl.tilelayershader.Vertex, ol.webgl.Vertex);


  /**
   * @const
   * @type {string}
   */
  ol.renderer.webgl.tilelayershader.Vertex.DEBUG_SOURCE = 'varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform vec4 u_tileOffset;\n\nvoid main(void) {\n  gl_Position = vec4(a_position * u_tileOffset.xy + u_tileOffset.zw, 0., 1.);\n  v_texCoord = a_texCoord;\n}\n\n\n';


  /**
   * @const
   * @type {string}
   */
  ol.renderer.webgl.tilelayershader.Vertex.OPTIMIZED_SOURCE = 'varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}';


  /**
   * @const
   * @type {string}
   */
  ol.renderer.webgl.tilelayershader.Vertex.SOURCE = ol.DEBUG_WEBGL ?
    ol.renderer.webgl.tilelayershader.Vertex.DEBUG_SOURCE :
    ol.renderer.webgl.tilelayershader.Vertex.OPTIMIZED_SOURCE;


  ol.renderer.webgl.tilelayershader.vertex = new ol.renderer.webgl.tilelayershader.Vertex();


  /**
   * @constructor
   * @param {WebGLRenderingContext} gl GL.
   * @param {WebGLProgram} program Program.
   * @struct
   */
  ol.renderer.webgl.tilelayershader.Locations = function(gl, program) {

    /**
     * @type {WebGLUniformLocation}
     */
    this.u_texture = gl.getUniformLocation(
        program, ol.DEBUG_WEBGL ? 'u_texture' : 'e');

    /**
     * @type {WebGLUniformLocation}
     */
    this.u_tileOffset = gl.getUniformLocation(
        program, ol.DEBUG_WEBGL ? 'u_tileOffset' : 'd');

    /**
     * @type {number}
     */
    this.a_position = gl.getAttribLocation(
        program, ol.DEBUG_WEBGL ? 'a_position' : 'b');

    /**
     * @type {number}
     */
    this.a_texCoord = gl.getAttribLocation(
        program, ol.DEBUG_WEBGL ? 'a_texCoord' : 'c');
  };

}