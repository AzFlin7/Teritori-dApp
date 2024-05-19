// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: feed/v1/feed.proto

package feedpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// FeedServiceClient is the client API for FeedService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FeedServiceClient interface {
	Posts(ctx context.Context, in *PostsRequest, opts ...grpc.CallOption) (*PostsResponse, error)
	IPFSKey(ctx context.Context, in *IPFSKeyRequest, opts ...grpc.CallOption) (*IPFSKeyResponse, error)
}

type feedServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFeedServiceClient(cc grpc.ClientConnInterface) FeedServiceClient {
	return &feedServiceClient{cc}
}

func (c *feedServiceClient) Posts(ctx context.Context, in *PostsRequest, opts ...grpc.CallOption) (*PostsResponse, error) {
	out := new(PostsResponse)
	err := c.cc.Invoke(ctx, "/feed.v1.FeedService/Posts", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *feedServiceClient) IPFSKey(ctx context.Context, in *IPFSKeyRequest, opts ...grpc.CallOption) (*IPFSKeyResponse, error) {
	out := new(IPFSKeyResponse)
	err := c.cc.Invoke(ctx, "/feed.v1.FeedService/IPFSKey", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FeedServiceServer is the server API for FeedService service.
// All implementations must embed UnimplementedFeedServiceServer
// for forward compatibility
type FeedServiceServer interface {
	Posts(context.Context, *PostsRequest) (*PostsResponse, error)
	IPFSKey(context.Context, *IPFSKeyRequest) (*IPFSKeyResponse, error)
	mustEmbedUnimplementedFeedServiceServer()
}

// UnimplementedFeedServiceServer must be embedded to have forward compatible implementations.
type UnimplementedFeedServiceServer struct {
}

func (UnimplementedFeedServiceServer) Posts(context.Context, *PostsRequest) (*PostsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Posts not implemented")
}
func (UnimplementedFeedServiceServer) IPFSKey(context.Context, *IPFSKeyRequest) (*IPFSKeyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IPFSKey not implemented")
}
func (UnimplementedFeedServiceServer) mustEmbedUnimplementedFeedServiceServer() {}

// UnsafeFeedServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FeedServiceServer will
// result in compilation errors.
type UnsafeFeedServiceServer interface {
	mustEmbedUnimplementedFeedServiceServer()
}

func RegisterFeedServiceServer(s grpc.ServiceRegistrar, srv FeedServiceServer) {
	s.RegisterService(&FeedService_ServiceDesc, srv)
}

func _FeedService_Posts_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PostsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeedServiceServer).Posts(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feed.v1.FeedService/Posts",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeedServiceServer).Posts(ctx, req.(*PostsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeedService_IPFSKey_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IPFSKeyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeedServiceServer).IPFSKey(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feed.v1.FeedService/IPFSKey",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeedServiceServer).IPFSKey(ctx, req.(*IPFSKeyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FeedService_ServiceDesc is the grpc.ServiceDesc for FeedService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FeedService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "feed.v1.FeedService",
	HandlerType: (*FeedServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Posts",
			Handler:    _FeedService_Posts_Handler,
		},
		{
			MethodName: "IPFSKey",
			Handler:    _FeedService_IPFSKey_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "feed/v1/feed.proto",
}
