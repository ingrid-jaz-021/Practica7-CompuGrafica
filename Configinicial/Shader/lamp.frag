#version 330 core
out vec4 outColor;
  
in vec3 Color;
in vec2 TexCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
    vec4 texColor1 = texture(texture1, TexCoord);
    vec4 texColor2 = texture(texture2, TexCoord);
    outColor = vec4(Color, 1.0) * mix(texColor1, texColor2, texColor2.a);
}